import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
  } from '@angular/animations';
  
  export const slideInOut = trigger('slideInOut', [
    transition('* => *', [
      
      group([query(
        ':enter',
        [style({ transform: 'translateY(-100%)' }),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}),
        
        )
      ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          animate('1000ms ease-in', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
    
    ])
      


      
      // query(
      //   ':enter',
      //   [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      //   { optional: true }
      // )
    ])
  ]);

  // export const slideInOut =  trigger('slideInOut', [
  //   transition(':enter', [
  //     style({transform: 'translateY(-100%)'}),
  //     animate('200ms ease-in', style({transform: 'translateY(0%)'}))
  //   ]),
  //   transition(':leave', [
  //     animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
  //   ])
  // ])