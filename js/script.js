

    var calendarEl = document.getElementById('calendar');

    var resource = [
        {
            id: 'a',
            title: 'Doctor A'
          },
          {
            id: 'b',
            title: 'Doctor B'
          },
          {
            id: 'c',
            title: 'Doctor C'
          },
          {
            id: 'd',
            title: 'Doctor D'
          }
      ];


      var events =  [
        {
            id: 'a',
            title: 'Mr. Vaibhav Yadav',
            start: "2023-11-28T02:00:00",
            end: "2023-11-28T05:00:00",
            resourceId: 'a',
        },
        {
          id: 'b',
          title: 'Mr. Vaibhav',
          start: "2023-11-28T01:00:00",
          end: "2023-11-28T02:00:00",
          resourceId: 'b',
      },
      {
        id: 'c',
        title: 'Mr. Chandan',
        start: "2023-11-28T03:00:00",
        end: "2023-11-28T04:00:00",
        resourceId: 'b',
    },
    {
      id: 'd',
      title: 'Miss Astha',
      start: "2023-11-28T03:00:00",
      end: "2023-11-28T04:00:00",
      resourceId: 'd',
  },
  {
    id: 'r',
    title: 'Mr. Ramraj',
    start: "2023-11-28T03:00:00",
    end: "2023-11-28T04:00:00",
    resourceId: 'd',
  }
      ];

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'resourceTimeGridDay',
      resources:  resource,
      events : events,
      editable: true,
      eventOverlap: false,
      nowIndicator: true
    });




    calendar.render();





































// var resources = [
//   {
//     id: 'a',
//     title: 'Room A'
//   },
//   {
//     id: 'b',
//     title: 'Room B'
//   },
//   {
//     id: 'c',
//     title: 'Room C'
//   },
//   {
//     id: 'd',
//     title: 'Room D'
//   },
//   {
//     id: 'e',
//     title: 'Room E'
//   }
// ]; 
 
 


// var events = [
//   {
//     id: 'a',
//     title: 'my event',
//     start: '2023-11-23T10:30:00',
//     end: '2023-11-23T11:30:00',
//     resourceId: 'a'
//   },

//   {
//     id: 'b',
//     title: 'my event 2',
//     start: '2023-11-22T13:30:00',
//     end: '2023-11-22T14:30:00',
//     resourceId: 'b'
//   },

//   {
//     id: 'c',
//     title: 'my event',
//     start: '2018-09-01'
//   }
// ]
 
 
 
//  var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'resourceTimeGridDay',
//       resources: resources,
//       events : events,
//       editable: true,
//       eventOverlap: false,
//       eventResizeStart: function(info){
//         console.log(info);
//       }
//     }
// );
//   calendar.render();