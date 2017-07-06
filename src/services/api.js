import xhr from './xhr'

export default{
  /**
   * 获取列表
   */
  getList:xhr.get.bind(null,'/api/v1/topics'),

  /**
   * 获取主题详情
   */
  getDetail:xhr.get.bind(null,'/api/v1/topic')
}
