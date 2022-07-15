const movie={template:`
<div>

        <h3 class="d-flex justify-content-center">
            Vue JS Front End
        </h3>
        <h5 class="d-flex justify-content-center">
            Movie Management Portal
        </h5>

        <!--Add Movie button -->
        <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">Add Movie</button>
        
        <!--Table to hold Data -->
        <table class="table table-striped">
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Description
                </th>
                <th>
                    Release Year
                </th>
                <!-- Options for edit and delete -->
                <th>
                    Options
                </th>
            </tr>
        </thead>
        <!-- v-for to go through each record in the database -->
        <tbody>
            <tr v-for="mov in movies">
                <td>{{mov.ID}</td>
                <td>{{mov.Name}}</td>
                <td>{{mov.Description}}</td>
                <td>{{mov.ReleaseYear}}</td>
                <td>
                    <!--edit button with pop up modal -->
                    <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(mov)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>
                    <!--delete button with a confrim pop up -->
                    <button type="button" class="btn btn-light mr-1" @click="deleteCLick(mov.Id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
        
                </td>
        </tbody>    
        </table>
        
        <div class ="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header"> <!--Display modal title -->
                <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <!-- Form to Add and update movies in database. includes required fields and min/max lengths -->
            <div class="modal-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">Movie Name</span>
                    <input type="text" class="form-control" v-model="Name" required maxlength="50">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Movie Description</span>
                    <input type="text" class="form-control" v-model="Description" maxlength="500">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Release Year</span>
                    <input type="text" class="form-control" v-model="ReleaseYear" required minlength="4">
                </div>
                
                <!-- Buttons within modal to update or create a movie-->
                <button type="button" v-if="Id==0" class="btn btn-primary" @click="createClick()">Create</button>
        
                <button type="button" v-if="Id!=0" class="btn btn-primary" @click="updateClick()">Update</button>
        
        
            </div>
        
        </div>
        </div>
        </div>
        </div>


`,

data(){
    return{
        // Declare empty array to hold data
        movies:[],
        modalTitle:"",
        Id:0,
        Name:"",
        Description:"",
        ReleaseYear:0

    }
},
methods:{
    // Using axios to consume GET api method
    refreshData(){
        axios.get(variables.API_URL+"MotionPicture").then((response)=>{
            // Assign data to Motion Picture array
            this.movies=response.data;
        })
    },
    addClick(){
        this.modalTitle="Add Movie";
        this.Id=0;
        this.Name="";
        this.Description="";
        this.ReleaseYear=0;
    },
    editClick(mov){
        this.modalTitle="Edit Movie";
        this.Id=mov.Id;
        this.Name=mov.Name;
        this.Description=mov.Description;
        this.ReleaseYear=mov.ReleaseYear;
    },
    createClick(){
        // Using axios to consume POST api method
        axios.post(variables.API_URL+"MotionPicture",{
            Name:this.Name,
            Description:this.Description,
            ReleaseYear:this.ReleaseYear
            
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
    },
    updateClick(){
        // Using axios to consume PUT api method
        axios.put(variables.API_URL+"MotionPicture",{
            Id:this.Id,
            Name:this.Name,
            Description:this.Description,
            ReleaseYear:this.ReleaseYear
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
    },
    deleteClick(Id){
        if(!confirm("Are You Sure?")){
            return;
        }
        // // Using axios to consume DELETE api method
        axios.delete(variables.API_URL+"MotionPicture/"+Id).then((response)=>{
            this.refreshData();
            alert(response.data);
        })
    }
},
mounted:function(){
    this.refreshData();
}

}