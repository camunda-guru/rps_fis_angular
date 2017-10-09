bankingApp.service('UserService',['$http',function($http)
{
    var userPromise=function()
    {
        return $http({
            method:'GET',
            dataType:"json",
            headers:{

                "content-type":"application/json"
            },

            url:"https://jsonplaceholder.typicode.com/users"
        }).then(function(response)
        {
            return response;
        })
    }


    return{
        userServiceObj:userPromise
    }
}])