import EInputText from '../components/E/Input/Text.vue';
import EInputNumber from '../components/E/Input/Number.vue';
import EInputSelect from '../components/E/Input/Select.vue';
import EInputRadioGroup from '../components/E/Input/RadioGroup.vue';

import EViewText from '../components/E/View/Text.vue';
import EViewNumber from '../components/E/View/Number.vue';
import EViewDate from '../components/E/View/Date.vue';
import EViewSelect from '../components/E/View/Select.vue';

export const defaultEditResolvers = createComponentResolver(
  {
    text: EInputText,
    number: EInputNumber,
    select: EInputSelect,
    radio: EInputRadioGroup,
  },
  (_) => EInputText,
);

export const defaultViewResolvers = createComponentResolver(
  {
    text: EViewText,
    number: EViewNumber,
    date: EViewDate,
    select: EViewSelect,
  },
  (_) => EViewText,
);
