import { defineComponent } from "vue";
import { VContainer } from "vuetify/components";
import { todoStore } from "@/stores/todo";
import ListItem from "./ListItem";

const List = defineComponent({
  setup() {
    const store = todoStore();
    return () => (
      <VContainer class="list-items">
        {store.tasks.map((task) => {
          return <ListItem task={task} />;
        })}
      </VContainer>
    );
  },
});
export default List;
