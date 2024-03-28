this code is node.js file    
    Written with the express framework      
    you have to install the npm package with the json file     

its set to the lochalhost 3000      

data of the code is in the class module     

how to use this code   
    1 to get all the information                              
                                                    get /api/informations  
    2 to get from the id                                      
                                                    get /api/informations/:id  
    3 to get from the CompanyName write the CompanyName       
                                                    get /api/informations/:CompanyName   
    4 to get from the CarName wrote the CarName               
                                                    get /api/informations/:CarName  
    5 to get the array of specific key  
        [CompanyName , CarName , Engine , PerformanceCar , TopSpeed , Price , Acceleration ]  

                                                    get /api/informations/:key  


    6 for upload the data to the server you need set 4 required key   
        [CompanyName , CarName , TopSpeed , Price] addional keys are optional   

                                                   post /api/informations  

    7 for update data you can only update the   
            [CompanyName , CarName]                           
                                                    put /api/informations/id  

    8 for delete the data you just need the write correct id     

                                                   delete /api/informations/id  