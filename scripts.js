'use strict';

(function($){

  $(function() {

    var datascource = {
      'name': 'Bel-group',
      'title': '',
      'children': [
        {'name': '集团总管理处','title':'xxx',
          'children': [
          { 'name': 'Beltom', 'title': '' ,
            'children': [
              { 'name': '稽核室', 'title': 'xxx' },
              { 'name': '总管理处', 'title': 'xxx',
                'children': [
                  { 'name': '高雄開發處', 'title': 'xxx'},
                  { 'name': 'Beltom Taipei', 'title': 'Benson Wang／王鵬翔',
                    'children': [
                      { 'name':'業務部', 'title': 'Sam Tseng／曾逸武',
                        'children': [
                          {'name': '業務支援組', 'title': '',
                            'children': [
                              {'name':'A1組', 'title': 'xxx'},
                              {'name':'A2組', 'title': 'xxx'},
                              {'name':'B1組', 'title': 'xxx'},
                              {'name':'B2組', 'title': 'xxx'}
                            ]
                          },
                          {'name':'客戶經理組', 'title': '',
                            'children': [
                              {'name':'A1組', 'title': 'Sharley Huang'},
                              {'name':'A2組', 'title': 'xxx'},
                              {'name':'B1組', 'title': 'xxx'},
                              {'name':'B2組', 'title': 'xxxx'}
                            ]
                          },
                          {'name':'FAE組', 'title': '',
                            'children': [
                              {'name':'結構化文件處理', 'title': 'xxx'},
                              {'name':'A2組', 'title': 'xxx'},
                              {'name':'B1組', 'title': 'xxx'}
                            ]
                          }
                        ]
                      },    
                      { 'name':'市場行銷部', 'title': '',
                        'children': [
                          {'name':'網路行銷組', 'title': ''},
                          {'name':'产品组', 'title': '',
                            'children': [
                              {'name':'打印设备', 'title': 'xxx'},
                              {'name':'帳單服務', 'title': 'xxx'},
                              {'name':'Incard', 'title': 'xxx'},
                              {'name':'xxxx', 'title': ''}
                            ]
                          },
                        ]
                      }, 
                      { 'name': '製程管制室', 'title': '',
                        'children': [
                          {'name':'製程規劃組', 'title': 'xxx',
                            'children': [
                              {'name':'POD', 'title': 'xxx'},
                              {'name':'帳單', 'title': 'xxxXXX'},
                              {'name':'Incard', 'title':'xxx'},
                              {'name':'xxxx', 'title': ''}
                            ]
                          },
                          {'name':'製程管制組', 'title': 'xxx',
                            'children': [
                              {'name':'POD', 'title': 'xxx'},
                              {'name':'帳單', 'title': 'xxx'},
                              {'name':'Incard', 'title': 'xxx'},
                              {'name':'xxxx', 'title': 'xxx'}
                            ]
                          }  
                        ]
                      },
                      { 'name': 'POD', 'title': 'Vicki Li／李依融',
                        'children': [
                          {'name':'線上書城運行組', 'title': ''},
                          {'name':'出版組', 'title': 'xxx'},
                          {'name':'產品規劃組', 'title': 'xxx'},
                          {'name':'作業組', 'title': 'xxx'},
                          {'name':'業務組', 'title': 'xxx',
                            'children': [
                              {'name':'通路推廣', 'title': 'xxx'},
                              {'name':'來源推展', 'title': 'xxx'}
                            ]
                          }, 
                          {'name':'物流組', 'title': 'xxx'},
                          {'name':'行销组', 'title': 'xxx',
                            'children': [
                              {'name':'活動策劃', 'title': 'xxx'},
                              {'name':'社群經營', 'title': 'xxx'}
                            ]
                          }
                        ]   
                      }, 
                      { 'name':'財務部', 'title': '',  
                        'children': [
                          {'name':'會計', 'title': 'xxx'},
                          {'name':'出納', 'title': ''},
                          {'name':'xxx', 'title': ''}
                        ]
                      },      
                      { 'name':'客服部', 'title': ''},
                      { 'name':'800 Call Center', 'title': ''},
                      { 'name': '行政管理部', 'title': '',
                        'children': [
                          {'name':'總務', 'title': 'Anny Lee／李月女'},
                          {'name':'採購', 'title': ''},
                          {'name':'人事', 'title': 'Anny Lee／李月女'},
                          {'name':'xxx', 'title': ''}
                        ]
                      },
                      { 'name':'品質保障部', 'title': 'xxx' },
                      { 'name': '系統運維部', 'title': '',
                        'children': [
                          {'name':'AP組', 'title': 'xxx'},
                          {'name':'雲服務組', 'title': 'xxx'},
                          {'name':'xxx', 'title': ''}
                        ]
                      },
                      { 'name': '作业管理部', 'title': 'Jason Yang'}
                    ]
                  },
                  { 'name': 'MIS', 'title': 'xxx', 
                    'children': [
                      {'name':'网络运行组', 'title': ''},
                      {'name':'生產平台運行組', 'title': ''},
                      {'name':'ERP組', 'title': ''}
                    ]
                  },
                  { 'name': '人力資源室', 'title': 'xxx',
                    'children': [
                      {'name':'教育訓練', 'title': ''},
                      {'name':'人力資源規劃', 'title': ''}
                    ]
                  },
                  { 'name': '財務規劃室', 'title': 'xxx'},
                  { 'name': '项目管制室', 'title': 'Joe Chen／陳麗華'}, 
                  { 'name': '投資規劃室', 'title': 'xxx'}
                ]
              }     
            ]
          },    
          { 'name': 'Bel-star', 'title': '',
            'children': [
              { 'name': '稽核室', 'title': 'xxx' },
              { 'name': '集团总管理处', 'title': 'xxxx',
                'children': [
                  {'name': '总管理处', 'title': 'xxx',
                    'children': [
                    { 'name': '上海分公司', 'title': 'Leo Tang' },
                    { 'name': '广州分公司', 'title': 'James Chen'}, 
                    { 'name': '800 Call Center', 'title': 'Leo Tang' },
                    { 'name': '业务部', 'title': 'Leo Tang' },
                    { 'name': '行政管理部', 'title': 'James Chen'}, 
                    { 'name': '财务部', 'title': 'Mancy Yu',
                      'children': [
                        {'name':'会计', 'title': ''},
                        {'name':'财务', 'title': ''},
                        {'name':'出纳', 'title': ''}
                     ]
                    },
                    { 'name': '客服部', 'title': 'Louis Lee' },
                    { 'name': '品质保障部', 'title': 'Louis Lee' },
                    { 'name': '项目管制室', 'title': 'Nancy Guo'}, 
                    { 'name': '系统运维部', 'title': 'Leo Tang' },
                    { 'name': '作业管理部', 'title': 'David Xue',
                      'children': [
                        {'name':'各作业中心', 'title': ''},
                        {'name':'设备保障组', 'title': ''}
                      ]
                    },
                    { 'name': '制程管制室', 'title': 'James Chen',
                      'children': [
                        {'name':'制程规划', 'title': ''},
                        {'name':'制程规划', 'title': ''}
                      ]
                    },
                    { 'name': '开发部', 'title': 'Leo Tang' },
                    { 'name': 'MIS', 'title': 'James Chen', 
                      'children': [
                        {'name':'网络运行组', 'title': ''},
                        {'name':'设', 'title': ''}
                      ]
                    },
                    { 'name': '研究发展室', 'title': 'Leo Tang' },
                    { 'name': '市場行銷部', 'title': 'Leo Tang',
                      'children': [
                        {'name':'产品组', 'title': '',
                          'children': [
                            {'name':'打印设备', 'title': 'Louis Lee'},
                            {'name':'eLetter', 'title': ''},
                            {'name':'印刷品零库存', 'title': ''},
                            {'name':'保单外包服务', 'title': ''}
                          ]
                        },
                        {'name':'网络行销组', 'title': ''}
                        ]
                    },
                    { 'name': '市场行销部', 'title': ''}
                    ]
                  }
                ]
              }
            ]
          }
      ] 
    };

    $('#chart-container').orgchart({
      'data' : datascource,
//      'depth': 2,
      'nodeContent': 'title'
    });

  });

})(jQuery);