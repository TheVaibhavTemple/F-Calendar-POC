    var resource = [
          // {
          //   id: 'a',
          //   title: 'Doctor A'
          // },
          // {
          //   id: 'b',
          //   title: 'Doctor B'
          // },
          // {
          //   id: 'c',
          //   title: 'Doctor C'
          // },
          // {
          //   id: 'd',
          //   title: 'Doctor D'
          // }
      ];

    var events = [];

    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      initialView: 'resourceTimeGridDay',
      resources:  resource,
      editable: true,
      allDaySlot: false,
      eventOverlap: false,
      aspectRatio: 2.5,
      nowIndicator: true,
      slotMinTime: '10:00:00',
      slotMaxTime: '22:00:00',
      eventResizeStop: function(info){
                console.log(info);
              }
    });
    calendar.render();




    $("#submit").click(a => {
     
      let email = $("#email").val();
      let title = $("#patitless").val();
      let start = $("#start").val();
      let end = $("#end").val();
      let doctor = $("#doctor").val();

      var event = {
        id: $("#email").val(),
        title: $("#title").val(),
        start: $("#start").val(),
        end: $("#end").val(),
        resourceId: $("#doctor").val(),
        email: $("#email").val()
    }


      if(email !== "" && title !== "" && start !== "" && end !== "" && doctor !== ""){
        if(events.some((element) => element.email === event.email)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: events.email + " is already added !",
                footer: '<a href="#">do not add duplicate email ids</a>'
              });
        }else{
            Swal.fire({
                title: "Good job!",
                text: "Employee details added successfully",
                icon: "success"
              });
              // $("#email").val("");  empty fields
              events.push(event);
             calendar.addEvent(event);
             renderTable();
        }
          
    }else{
        Swal.fire({
            title: "Can not empty",
            text: "fill the input field",
            icon: "warning",
          })
    }    
  });


  $("#submitDr").click(a => {
    let drId = $("#drId").val();
    let drName = $("#drName").val();

    var drObj = {
      id: drId,
      title: drName
    }


    if(drId !== "" && drName !== ""){
      if(resource.some((element) => element.id === drObj.id)){
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: resource.drId + " is already added !",
              footer: '<a href="#">do not add duplicate email ids</a>'
            });
      }else{
          Swal.fire({
              title: "Good job!",
              text: "Doctor details added successfully",
              icon: "success"
            });
            // $("#email").val("");  empty fields
            resource.push(drObj);
            calendar.addResource(drObj);
           renderDoctorTable();
      }
        
  }else{
      Swal.fire({
          title: "Can not empty",
          text: "fill the input field",
          icon: "warning",
        })
  }  

    var drString = ``;

    resource.forEach(a => {
      drString += `<option value="${a.id}">${a.title}</option>`
    })
    
    $("#doctor").html(drString);

  })

  $('body').on('click', '.delete', function () {

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this appointment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your appointment has been deleted.",
            icon: "success"
          });
          var id = $(this).attr('id');
          console.log(id)
          console.log(events)
          events = events.filter(item => item.email !== id);
          calendar.getEventById(id).remove();
          console.log(events)
          renderTable();
        }
      });
});



$('body').on('click', '.deleteDr', function () {

  Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this Doctor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Doctor has been deleted.",
          icon: "success"
        });
        var id = $(this).attr('id');
        console.log(id)
        console.log(resource)
        resource = resource.filter(item => item.id !== id);
        calendar.getResourceById(id).remove();
        // calendar.getEventById(id).remove();
        console.log(resource)
        renderDoctorTable();
      }
    });
});

  function renderTable() {
    if (events.length != 0) {
        var table = `
            <table class="table table-success table-hover table-bordered">
                <thead class="table-success">
                    <tr>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Doctor</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-warning">`;

        events.forEach(e => {
            table += `
                    <tr>
                        <td>${e.title}</td>
                        <td>${e.start}</td>
                        <td>${e.end}</td>
                        <td>${resource.find(a => a.id == e.resourceId).title}</td>
                        <td><div class="fa fa-trash-o delete" id="${e.email}"></div></td>
                    </tr>`;
        });

        table += `
                </tbody>
            </table>`;

        $(".patientData").html(table);
    } else {
        $(".patientData").html("");
    }
}


function renderDoctorTable(){
  if (resource.length != 0) {
    var table = `
        <table class="table table-success table-hover">
            <thead class="table-success">
                <tr>
                    <th scope="col">Doctor Id</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-warning">`;

    resource.forEach(e => {
        table += `
                <tr>  
                    <td>${e.id}</td>
                    <td>${e.title}</td>
                    <td><div class="fa fa-trash-o deleteDr" id="${e.id}"></div></td>
                </tr>`;
    });

    table += `
            </tbody>
        </table>`;
        console.log(resource);
        console.log(table);
    $("#drDetails").html(table);
} else {
    $("#drDetails").html("");
}
}