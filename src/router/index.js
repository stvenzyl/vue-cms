import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import MyCustomer from '@/components/MyCustomer'
import TeamCustomer from '@/components/TeamCustomer'
import SeaCustomer from '@/components/SeaCustomer'
import MySea from '@/components/MySea'
import Application from '@/components/Application'
import NoResource from '@/components/NoResource'
import MyCustomerAdd from '@/components/MyCustomerAdd'
import MyCustomerDetail from '@/components/MyCustomerDetail'
import MyCustomerDetailEdit from '@/components/MyCustomerDetailEdit'
import MyCustomerSigned from '@/components/MyCustomerSigned'
import MyCustomerSignedFor from '@/components/MyCustomerSignedFor'
import MyCustomerSignedAdd from '@/components/MyCustomerSignedAdd'
import MyCustomerSignedUpdate from '@/components/MyCustomerSignedUpdate'
import MyCustomerSignedFromCustomer from '@/components/MyCustomerSignedFromCustomer'
import TeamCustomerDetail from '@/components/TeamCustomerDetail'
import StaffList from '@/components/StaffList'
import StationList from '@/components/StationList'
import PhoneAppointment from '@/components/PhoneAppointment'
import PlatformAppointment from '@/components/PlatformAppointment'
import VisitAppointment from '@/components/VisitAppointment'
import StaffDetail from '@/components/StaffDetail'
import StaffEdit from '@/components/StaffEdit'
import StaffAdd from '@/components/StaffAdd'
import StationDetail from '@/components/StationDetail'
import StationEdit from '@/components/StationEdit'
import PlatformAppointmentAdd from '@/components/PlatformAppointmentAdd'
import PlatformAppointmentDetail from '@/components/PlatformAppointmentDetail'
import PlatformAppointmentEdit from '@/components/PlatformAppointmentEdit'
import PhoneAppointmentAdd from '@/components/PhoneAppointmentAdd'
import PhoneAppointmentDetail from '@/components/PhoneAppointmentDetail'
import PhoneAppointmentEdit from '@/components/PhoneAppointmentEdit'
import PlatformAppointmentRecord from '@/components/PlatformAppointmentRecord'
import PhoneAppointmentRecord from '@/components/PhoneAppointmentRecord'
import CheckWorkAttendance from '@/components/CheckWorkAttendance'
import Salary from '@/components/Salary'
import CheckWorkAttendanceDetail from '@/components/CheckWorkAttendanceDetail'
import Leave from '@/components/Leave'
import CapitalFlow from '@/components/CapitalFlow'
import CapitalFlowAdd from '@/components/CapitalFlowAdd'
import CapitalFlowList from '@/components/CapitalFlowList'
import CapitalFlowEdit from '@/components/CapitalFlowEdit'
import MyWorkAttendance from '@/components/MyWorkAttendance'
import MySalary from '@/components/MySalary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/no-resource/:code',
      name: 'noResource',
      component: NoResource
    },
    {
      path: '/',
      name: 'index',
      redirect: '/customer/my',
      component: Index,
      children: [
        {
          path: '/customer',
          redirect: '/customer/my'
        },
        {
          path: '/customer/my',
          name: 'myCustomer',
          component: MyCustomer
        },
        {
          path: '/customer/my/detail/:id',
          name: 'myCustomerDetail',
          component: MyCustomerDetail
        },
        {
          path: '/customer/my/detail/:id/edit',
          name: 'myCustomerDetailEdit',
          component: MyCustomerDetailEdit
        },
        {
          path: '/customer/team/detail/:id',
          name: 'teamCustomerDetail',
          component: TeamCustomerDetail
        },
        {
          path: '/customer/my/add',
          name: 'myCustomerAdd',
          component: MyCustomerAdd
        },
        {
          path: '/customer/team',
          name: 'teamCustomer',
          component: TeamCustomer
        },
        {
          path: '/customer/sea',
          name: 'seaCustomer',
          component: SeaCustomer
        },
        {
          path: '/customer/my-sea',
          name: 'mySea',
          component: MySea
        },
        {
          path: '/customer/signed',
          name: 'myCustomerSigned',
          component: MyCustomerSigned
        },
        {
          path: '/customer/signed-for',
          name: 'myCustomerSignedFor',
          component: MyCustomerSignedFor
        },
        {
          path: '/customer/signed-update/:id',
          name: 'myCustomerSignedUpdate',
          component: MyCustomerSignedUpdate
        },
        {
          path: '/customer/signed-fromcustomer/:customerid',
          name: 'myCustomerSignedFromCustomer',
          component: MyCustomerSignedFromCustomer
        },
        {
          path: '/customer/signed-add',
          name: 'myCustomerSignedAdd',
          component: MyCustomerSignedAdd
        },
        {
          path: '/customer/application',
          name: 'application',
          component: Application
        },
        // {
        //   path: '/setup/staff',
        //   name: 'staffList',
        //   component: StaffList
        // },
        {
          path: '/setup/staff/i/:index',
          name: 'staffList',
          component: StaffList
        },
        {
          path: '/setup/staff/add/:index',
          name: 'staffAdd',
          component: StaffAdd
        },
        {
          path: '/setup/staff/detail/:id',
          name: 'staffDetail',
          component: StaffDetail
        },
        {
          path: '/setup/staff/detail/:id/edit/:index',
          name: 'staffEdit',
          component: StaffEdit
        },
        // {
        //   path: '/setup/station',
        //   name: 'stationList',
        //   component: StationList
        // },
        {
          path: '/setup/station/i/:index',
          name: 'stationList',
          component: StationList
        },
        {
          path: '/setup/station/detail/:id',
          name: 'stationDetail',
          component: StationDetail
        },
        {
          path: '/setup/station/detail/:id/edit/:index',
          name: 'stationEdit',
          component: StationEdit
        },
        {
          path: '/appointment/phone',
          name: 'phoneAppointment',
          component: PhoneAppointment
        },
        {
          path: '/appointment/phone/add',
          name: 'phoneAppointmentAdd',
          component: PhoneAppointmentAdd
        },
        {
          path: '/appointment/phone/detail/:id',
          name: 'phoneAppointmentDetail',
          component: PhoneAppointmentDetail
        },
        {
          path: '/appointment/phone/detail/:id/edit',
          name: 'PhoneAppointmentEdit',
          component: PhoneAppointmentEdit
        },
        {
          path: '/appointment/phone/record/:id',
          name: 'phoneAppointmentRecord',
          component: PhoneAppointmentRecord
        },
        {
          path: '/appointment/platform',
          name: 'platformAppointment',
          component: PlatformAppointment
        },
        {
          path: '/appointment/platform/add',
          name: 'platformAppointmentAdd',
          component: PlatformAppointmentAdd
        },
        {
          path: '/appointment/platform/detail/:id',
          name: 'platformAppointmentDetail',
          component: PlatformAppointmentDetail
        },
        {
          path: '/appointment/platform/detail/:id/edit',
          name: 'platformAppointmentEdit',
          component: PlatformAppointmentEdit
        },
        {
          path: '/appointment/platform/record/:id',
          name: 'platformAppointmentRecord',
          component: PlatformAppointmentRecord
        },
        {
          path: '/appointment/visit',
          name: 'visitAppointment',
          component: VisitAppointment
        },
        {
          path: '/work-attendance/list',
          name: 'checkWorkAttendance',
          component: CheckWorkAttendance
        },
        {
          path: '/work-attendance/detail/:id/:date',
          name: 'checkWorkAttendanceDetail',
          component: CheckWorkAttendanceDetail
        },
        {
          path: '/work-attendance/leave',
          name: 'leave',
          component: Leave
        },
        {
          path: '/salary',
          name: 'salary',
          component: Salary
        },
        {
          path: '/capital-flow',
          name: 'capitalFlow',
          component: CapitalFlow
        },
        {
          path: '/capital-flow/list/:date',
          name: 'capitalFlowList',
          component: CapitalFlowList
        },
        {
          path: '/capital-flow/edit/:id',
          name: 'capitalFlowEdit',
          component: CapitalFlowEdit
        },
        {
          path: '/capital-flow/add',
          name: 'capitalFlowAdd',
          component: CapitalFlowAdd
        },
        {
          path: '/my/work-attendance',
          name: 'myWorkAttendance',
          component: MyWorkAttendance
        },
        {
          path: '/my/salary',
          name: 'mySalary',
          component: MySalary
        }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})
