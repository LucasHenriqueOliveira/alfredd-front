class Api {
    constructor(url) {
        this.url = url;
    }

    getAllAgencies() {
        if (!this.token) {
            this._login('alfred','teste', function(token) {
                this.token = token;
            });
        }
        this._get('/platform', function(json) {
           console.log(json);
        });
    }

    _get(uri, callback) {
        $.ajax({
            type: 'GET',
            url: this.url + uri,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", 'Bearer '+ this.token);
            }
        })
        .done(function(json) {
            callback(json);
        })
        .fail(function(status) {
            console.log('Error code ' + status);
        });
    }

    _login(user,pass,callback) {
        $.ajax({
            type: 'POST',
            dataPost: {"username": user, "password": pass},
            url: this.url + '/auth/authorize'
        })
        .done(function(json) {
            callback(json.token);
        })
        .fail(function(statusCode) {
            console.log('Error code ' + statusCode);
        });
    }

}
