### English

#### v-enter-from:
Starting state for enter. Added before the element is inserted, removed one frame after the element is inserted.
#### v-enter-active:
Active state for enter. Applied during the entire entering phase. Added before the element is inserted, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.
#### v-enter-to:
Ending state for enter. Added one frame after the element is inserted (at the same time v-enter-from is removed), removed when the transition/animation finishes.
#### v-leave-from:
Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.
#### v-leave-active:
Active state for leave. Applied during the entire leaving phase. Added immediately when a leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.
#### v-leave-to:
Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave-from is removed), removed when the transition/animation finishes.

**v-enter-active** and **v-leave-active** give us the ability to specify different easing curves for enter / leave transitions, which we'll see an example of in the following sections.

### Russian

#### v-enter-from:
Начальное состояние для ввода. <br>
Добавляется до вставки элемента, удаляется через один кадр после вставки элемента.
#### v-enter-active:
Активное состояние для ввода. <br>
Применяется на протяжении всего вступительного этапа.
Добавляется перед вставкой элемента и удаляется после завершения анимации перехода.
Этот класс можно использовать для определения продолжительности, задержки и кривой плавности для входящего перехода.
#### v-enter-to:
Конечное состояние для ввода. <br>
Добавлен один кадр после вставки элемента (при этом **v-enter-from** убирается), убирается по окончании анимации перехода.
#### v-leave-from:
Исходное состояние для отпуска. <br>
Добавляется сразу при срабатывании уходящего перехода, удаляется через один кадр.
#### v-leave-active:
Активное состояние для отпуска. <br>
Применяется на протяжении всей фазы ухода.
Добавляется сразу же, когда срабатывает переход выхода, удаляется, когда анимация перехода заканчивается.
Этот класс можно использовать для определения продолжительности, задержки и кривой ослабления для перехода на выход.
#### v-leave-to:
Конечное состояние для отпуска. <br>
Добавлен один кадр после срабатывания покидающего перехода (при этом удаляется **v-leave-from**), удаляется после завершения анимации перехода.
**v-enter-active** и **v-leave-active** дают нам возможность указывать различные кривые плавности для переходов входа и выхода, пример которых мы увидим в следующих разделах.
