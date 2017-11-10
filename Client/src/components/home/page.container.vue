<template>
	<!-- <div class="page_container">
		<h2 class="page-title md-h4">Title</h2>
		<router-view></router-view>
	</div> -->
	<div class="page_container">
		<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
			{{item.content}}
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
  name: "bwu-pageContainer",
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>

<style scoped>
.page_container {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 18px 18px 18px 18px;
  overflow: auto;
}

.page-title {
  height: 48px;
  line-height: 48px;
  padding: 0 12px;
  font-size: 24px;
  position: fixed;
  top: 76px;
  left: 272px;
  cursor: default;
  transition: ease 0.2s all;

  background-color: rgb(103, 134, 145);
  color: #fff;
}

.page-title:hover {
  background-color: rgb(76, 93, 99);
}
</style>