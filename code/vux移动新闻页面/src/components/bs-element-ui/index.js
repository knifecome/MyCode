/**
 * @author 周浪 <zhoulanga@zbj.com>
 * @date   2017/6/8
 * @desc   element-ui 相关
 */

import Vue from 'vue'
import {
    Pagination,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    Checkbox,
    Select,
    Option,
    Button,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Tree,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Icon,
    Row,
    Col,
    Card,
    Loading,
    Message,
    MessageBox,
    Alert,
    Dialog,
    Progress,
    Breadcrumb,
    BreadcrumbItem,
    radioGroup,
    radioButton,
    Radio,
    ButtonGroup,
    MenuItem,
    Menu,
    Submenu,
    MenuItemGroup,
    Popover,
    Upload


} from 'element-ui'
Vue.component(Pagination.name, Pagination)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(DatePicker.name, DatePicker)
Vue.component(TimeSelect.name, TimeSelect)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Tree.name, Tree)
Vue.component(Tag.name, Tag)
Vue.component(Icon.name, Icon)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Card.name, Card)
Vue.component(Alert.name, Alert)
Vue.component(Dialog.name, Dialog)
Vue.component(Progress.name, Progress)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(radioGroup.name, radioGroup)
Vue.component(radioButton.name, radioButton)
Vue.component(Radio.name, Radio)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Popover.name, Popover)
Vue.component(Upload.name, Upload)

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
