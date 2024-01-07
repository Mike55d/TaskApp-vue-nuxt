import { defineComponent, ref, watch, reactive } from "vue";
import {
  VContainer,
  VCard,
  VRow,
  VCol,
  VCheckboxBtn,
  VIcon,
  VBtn,
} from "vuetify/components";
import { todoStore } from "@/stores/todo";

const ListItem = defineComponent({
  props: ["task"],
  setup(props) {
    const store = todoStore();
    let { value: task } = ref(props.task);
    watch(
      () => props.task,
      (newValue) => (task = newValue)
    );

    const toggleStatusTask = () => {
      store.toggleStatusTask(task.id);
    };

    const deleteTask = () => {
      store.deleteTask(task.id);
    };

    return () => (
      <VCard style={{ marginBottom: "10px", padding: "5px" }}>
        <VRow>
          <VCol md="2">
            <VCheckboxBtn
              color="red"
              modelValue={task.completed}
              // @ts-ignore
              onClick={toggleStatusTask}
            />
          </VCol>
          <VCol md="8">
            <h3
              class={`text-md-center mt-2 ${
                task.completed ? "text-decoration-line-through" : ""
              }`}
            >
              {task.title}
            </h3>
          </VCol>
          <VCol md="2">
            <VBtn
              color="plain"
              style={{
                borderRadius: "50px",
                minWidth: "35px",
                width: "35px",
              }}
            >
              {/* @ts-ignore */}
              <VIcon color="red" icon="mdi-close" onClick={deleteTask} />
            </VBtn>
          </VCol>
        </VRow>
      </VCard>
    );
  },
});
export default ListItem;
