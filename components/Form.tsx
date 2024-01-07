import { defineComponent, ref } from "vue";
import { VTextField, VContainer, VBtn } from "vuetify/components";
import { todoStore } from "@/stores/todo";

const Form = defineComponent({
  setup() {
    const store = todoStore();
    const titleTask = ref("");
    const setValueTask = (value: any) => {
      titleTask.value = value;
    };

    const addTask = () => {
      if (!titleTask.value) return;
      store.addTask(titleTask.value);
      titleTask.value = "";
    };

    return () => (
      <VContainer style={{minHeight:'162px'}}>
        <VTextField
          label="Task title"
          modelValue={titleTask.value}
          onUpdate:modelValue={setValueTask}
          density="compact"
          variant="outlined"
        />
        <VBtn color="green" onClick={addTask}>
          Add Task
        </VBtn>
      </VContainer>
    );
  },
});
export default Form;
