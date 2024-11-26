import React from 'react'
import usemap from '@/hooks/usemap'

const nav=[
  {
    id: 1,
    name:'Post Art',
    icon: 'icon'
  },
  {
    id: 2,
    name:'My listing',
    icon: 'icon'
  },
  {
    id: 3,
    name:'Sold Art ',
    icon: 'icon'
  },
  {
    id: 4,
    name:'Total Income',
    icon: 'icon'
  },
  {
    id: 5,
    name:'Settings',
    icon: 'icon',
    subsetting:[
      {
        id: 1,
        name:'Security',
        icon: 'icon',
        subsetting:[
          {
            id: 1,
        name:'Change Password',
        icon: 'icon',
            
          },
          {
            id: 2,
        name:'Enable Two Factor Authorization',
        
        icon: 'icon',
            
          },
          {
            id: 3,
        name:'',
        icon: 'icon',
            
          },
        ]
      },
      {
        id: 2,
        name:'Theme',
        icon: 'icon'
      },
      {
        id: 3,
        name:'Delete Account',
        icon: 'icon'
      },

    ]
  }
]

export default function page() {
  return (
    <div>dashboard</div>
  )
}
