import { Ref, VNode, defineComponent, h, ref } from 'vue';

const UPDATE_VALUE_EVENT = 'update:modelValue';
const MODEL_VALUE = 'modelValue';

interface OptionsType {
  props?: Array<string>;
  events?: Array<string>;
  modelProp?: string;
  modelUpdateEvent?: string | string[];
  externalModelUpdateEvent?: string;
}

export interface InputPropsType extends Object {
  modelValue: string | boolean;
}

const getClasses = (classes: string | unknown) => {

  if (typeof classes !== 'string') return [];

  return classes.split(' ') || [];
};

const mergeClasses = (
  ref: Ref<HTMLElement | undefined>,
  componentClasses: Set<string>,
  defaultClasses: string[] = []
) => {
  return [...Array.from(ref.value?.classList || []), ...defaultClasses]
    .filter((item, index, items) => !componentClasses.has(item) && items.indexOf(item) === index);
};

export const proxy = <ElementType, PropType>(tagName: string, options?: OptionsType) => {

  const {
    props = [],
    events = [],
    // modelProp,
    // modelUpdateEvent,
    // externalModelUpdateEvent
  } = options || {};

  const VueComponent = defineComponent<PropType & InputPropsType>((props, context) => {

    console.log(1);

    const { attrs, emit, slots } = context;

    const element = ref<HTMLElement>();

    const classes = new Set(getClasses(attrs.class));

    // // TODO
    // let modelPropValue = (props as any)[modelProp as any];

    // const onVnodeBeforeMount = (vnode: VNode) => {

    //   if (!vnode.el) return;

    //   [modelUpdateEvent]
    //     .flat(1)
    //     .forEach((eventName) => {

    //       if (!eventName) return;

    //       vnode.el?.addEventListener(eventName.toLowerCase(), (event: Event) => {

    //         // TODO
    //         modelPropValue = (event?.target as any)[modelProp as any];

    //         emit(UPDATE_VALUE_EVENT, modelPropValue);

    //         // TODO
    //         // if (externalModelUpdateEvent)
    //         emit(externalModelUpdateEvent as any, event);
    //       });
    //     });
    // };

    return () => {

      console.log(2112222);

      // TODO
      // modelPropValue = (props as any)[modelProp as any];

      // TODO
      getClasses(attrs.class).forEach(classes.add);

      const newProps = {
        ...props,
        class: mergeClasses(element, classes),
        ref: element,

        // TODO
        // onVnodeBeforeMount: (modelUpdateEvent && externalModelUpdateEvent) ? onVnodeBeforeMount : undefined
        // onVnodeBeforeMount: (modelUpdateEvent) ? onVnodeBeforeMount : undefined
      };

      // if (modelProp) {
      //   newProps[modelProp] = props.hasOwnProperty(MODEL_VALUE) && props[MODEL_VALUE] !== undefined ? props.modelValue : modelPropValue;
      // }

      return h(tagName, newProps, slots.default && slots.default());
    }
  })

  VueComponent.props = [...props, ...events];

  // if (modelProp) {
  //   VueComponent.props.push(MODEL_VALUE);
  //   VueComponent.emits = [UPDATE_VALUE_EVENT, externalModelUpdateEvent];
  // }

  VueComponent['displayName'] = tagName;

  return VueComponent;
}

// TODO
// export const IonCheckbox = /*@__PURE__*/ defineContainer<JSX.IonCheckbox>('ion-checkbox', [
//   'color',
//   ...
// ],
// {
//   "modelProp": "checked",
//   "modelUpdateEvent": [
//     "v-ionChange",
//     "v-ion-change"
//   ],
//   "externalModelUpdateEvent": "ionChange"
// });

// v-model with custom components
// <custom-text-input v-model="value" />
// <!-- IS THE SAME AS -->
// <custom-text-input 
//    :modelValue="value"
//    @update:modelValue="value = $event"
// />

// <input 
//   type='text'
//   placeholder='Input'
//   :value='modelValue'
//   @input='$emit("update:modelValue", $event.target.value)'
// />

// <input v-model="email" />
// <input :value="email" @input="e => email = e.target.value" />

// export default {
//   prop: ['hidden'],
//   model: {
//       prop: 'hidden',
//       event: 'blur'
//   }
//   methods: {
//       handleInput (value) {
//           this.$emit('blur', value)
//       }
//   }
// }