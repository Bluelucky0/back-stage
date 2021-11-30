import Mock from 'mockjs'

import homeApi from '../api/HomeData/index'
Mock.mock('/api/home',homeApi.getStatisticalDta)