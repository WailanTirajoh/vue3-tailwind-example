export default `
<script setup lang="ts">
import { ref } from "vue";

const data = ref({
    column: [
      {
        label: "Name",
        field: "name",
        width: "400px",
        sortable: true,
      },
      {
        label: "Status",
        field: "status",
        width: "400px",
        sortable: true,
        // Template string example
        template: (data): string => '
          <div class="flex justify-center">
            dynamic html goes here!
          </div>
        ',
      },
    ] as Array<any>,
    data: [
      {
        id: 1,
        name: "cWailan",
        status: "Active",
        test: "test",
      },
      {
        id: 2,
        name: "bWailan",
        status: "Inactive",
        test: "test",
      },
      {
        id: 3,
        name: "aWailan",
        status: "Active",
        test: "test",
      },
      {
        id: 4,
        name: "sWailan",
        status: "Active",
        test: "test",
      },
      {
        id: 5,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 6,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 7,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 8,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 9,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 10,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 11,
        name: "cWailan",
        status: "Active",
        test: "test",
      },
      {
        id: 12,
        name: "bWailan",
        status: "Inactive",
        test: "test",
      },
      {
        id: 13,
        name: "aWailan",
        status: "Active",
        test: "test",
      },
      {
        id: 14,
        name: "sWailan",
        status: "Active",
        test: "test",
      },
      {
        id: 15,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 16,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 17,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 18,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 19,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
      {
        id: 20,
        name: "Wailan",
        status: "Active",
        test: "test",
      },
    ] as Array<any>,
    limit: 5,
    search: "",
    selected: [],
    sortBy: "status",
    sortType: "asc",
    setting: {
      checkbox: true,
      limitOption: [
        {
          label: "5",
          value: 5,
        },
        {
          label: "10",
          value: 10,
        },
        {
          label: "50",
          value: 50,
        },
        {
          label: "100",
          value: 100,
        },
        {
          label: "200",
          value: 200,
        },
      ],
    },
  });
<script/>
<tw-datatable-client
    v-model:search="data.search"
    v-model:limit="data.limit"
    v-model:selected="data.selected"
    v-model:sort-by="data.sortBy"
    v-model:sort-type="data.sortType"
    :column="data.column"
    :data="data.data"
    :setting="data.setting"
    @datatable:column-hook="datatableHook"
    >
    <template #empty> No Data </template>
</tw-datatable-client>`;
