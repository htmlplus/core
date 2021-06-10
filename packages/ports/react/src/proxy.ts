import React from 'react';

type EventsType = Array<string>;

type EventHandlerType = (event: Event) => any;

type FinalPropsType<ElementType> = Omit<PropsType<ElementType>, 'forwardedRef'>;

type Mutable<T> = { -readonly [P in keyof T]-?: T[P] };

interface PropsType<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef: React.RefObject<ElementType>;
  ref?: React.Ref<any>;
}

export interface StyleReactProps {
  class?: string;
  className?: string;
  style?: {
    [key: string]: any
  };
}

const attachEvent = (element: Element, name: string, handler: EventHandlerType) => {

  const events = element['$events'] || (element['$events'] = {});

  const previous = events[name];

  previous && element.removeEventListener(name, previous);

  function callback(event: Event) {
    handler && handler.call(this, event);
  }

  element.addEventListener(name, events[name] = callback);
}

const dashToPascalCase = (string: string) => {
  return string
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

const getCustomEvent = (name: string, events: EventsType) => {

  if (!name.match(/on[A-Z]\w+/)) return;

  const eventName = name.substring(3).toLowerCase();

  return events.find((event) => event.toLowerCase().endsWith(eventName));
}

const getProps = <ElementType>(ref: React.Ref<ElementType>, props: PropsType<ElementType>, events: EventsType) => {

  const { forwardedRef } = props;

  const result: FinalPropsType<ElementType> = {
    ref: mergeRefs(forwardedRef, ref)
  }

  Object.keys(props).forEach((name) => {

    if (
      name === 'children' ||
      name === 'className' ||
      name === 'forwardedRef' ||
      name === 'ref'
    ) return;

    if (getCustomEvent(name, events)) return;

    result[name] = props[name];
  })

  return result;
}

const setProps = <ElementType>(element: ElementType, props: PropsType<ElementType>, events: EventsType) => {

  if (!(element instanceof Element)) return;

  // TODO
  // add any classes in className to the class list
  // const className = getClassName(node.classList, newProps, oldProps);
  // if (className !== '') node.className = className;

  Object.keys(props).forEach((name) => {

    if (
      name === 'children' ||
      name === 'class' ||
      name === 'className' ||
      name === 'forwardedRef' ||
      name === 'ref' ||
      name === 'style'
    ) return;

    const event = getCustomEvent(name, events);

    if (!event) return element[name] = props[name];

    attachEvent(element, event, props[name]);
  })
}

const forwardRef = <ElementType, PropType>(ReactComponent: any) => {

  const forwardRef = (
    props: PropType & Omit<React.HTMLAttributes<ElementType>, 'style'> & StyleReactProps,
    ref: React.Ref<ElementType>,
  ) => {

    const { children, ...remainedProps } = props;

    const newProps = {
      ...remainedProps,
      forwardedRef: ref
    }

    return React.createElement(ReactComponent, newProps, children);
  };

  forwardRef.displayName = ReactComponent.displayName;

  return React.forwardRef(forwardRef);
}

const mergeRefs = <ElementType>(...refs: React.Ref<ElementType>[]) => (value: ElementType) => {

  return refs.forEach((ref) => {

    if (typeof ref === 'function') return ref(value);

    if (ref == null) return;

    (ref as Mutable<React.RefObject<ElementType>>).current = value;
  })
}

export const proxy = <ElementType, PropType>(tagName: string, events: EventsType = []) => {

  const ReactComponent = class extends React.Component<PropsType<ElementType>> {

    element!: ElementType;

    setElement = (element: ElementType) => {
      this.element = element;
    }

    constructor(props: PropsType<ElementType>) {
      super(props);
    }

    componentDidMount() {
      this.componentDidUpdate(/*this.props*/);
    }

    componentDidUpdate(/*prevProps: InternalProps<ElementType>*/) {
      setProps<ElementType>(this.element as any, this.props, events);
    }

    render() {

      const { children } = this.props;

      const newProps = getProps<ElementType>(this.setElement, this.props, events);

      return React.createElement(tagName, newProps, children);
    }
  }

  // const ReactComponentNew = (props: InternalPropsType<ElementType>) => {

  //   const { children } = props;

  //   const ref = useRef(null);

  //   const newProps: FinalPropsType<ElementType> = getProps(ref, props, events);

  //   useEffect(() => setProps(ref.current, props, events));

  //   return React.createElement(tagName, newProps, children);
  // }

  ReactComponent['displayName'] = dashToPascalCase(tagName);

  return forwardRef<ElementType, PropType>(ReactComponent);
}