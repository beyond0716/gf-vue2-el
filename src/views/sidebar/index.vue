<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Study</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/study' }"><i class="fa fa-circle-o"></i>Test</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/study/curry' }"><i class="fa fa-circle-o"></i>Curry</router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>vue-study</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/vue-study' }"><i class="fa fa-circle-o"></i>router-link</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/vue-study/computed' }"><i class="fa fa-circle-o"></i>computed</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/vue-study/named-views' }"><i class="fa fa-circle-o"></i>named views
              </router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>User</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/user/GuoFeng' }"><i class="fa fa-circle-o"></i>User Home</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/user/GuoFeng/profile' }"><i class="fa fa-circle-o"></i>User Profile
              </router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Count</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/count' }"><i class="fa fa-circle-o"></i>Count</router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Article</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/article' }"><i class="fa fa-circle-o"></i>Article列表</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/article/detail' }"><i class="fa fa-circle-o"></i>Article详情</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/article/create' }"><i class="fa fa-circle-o"></i>Article创建</router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Form</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/radio' }"><i class="fa fa-circle-o"></i>Radio单选框</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/checkbox' }"><i class="fa fa-circle-o"></i>Checkbox复选框</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/input' }"><i class="fa fa-circle-o"></i>Input 输入框</router-link>
            </li>
            <li>
              <router-link :to="{ path: '/select' }"><i class="fa fa-circle-o"></i>Select选择器</router-link>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Data</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <router-link :to="{ path: '/pagination' }"><i class="fa fa-circle-o"></i>Pagination分页</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
    name   : 'sidebar',
    componentName:'sidebar',
    data () {
      return {}
    },
    methods: {

    },
    created(){

    }
  }
</script>
