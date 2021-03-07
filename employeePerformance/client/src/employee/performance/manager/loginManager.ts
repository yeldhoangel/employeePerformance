import * as employee from '../../../employee';
export class LoginManager {
    constructor() {
        //ページ読込時のイベント
        this.init();
    }
    
    public init() {

    }

    public login() {
        var self = this;
        var username = $('#login-form').find('#username').val();
        var pass = $('#login-form').find('input[type="password"]:visible').val();
        if (!username) {
            $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_USERNAME"));
            return;
        } else if (!pass) {
            $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
            return;
        } else {
            $('#login-form').find('.msg_error').text("");
        }
        var data;
        data = "username=" + username;
        data += "&password=" + pass;
        $.ajax({
            url: employee.EmployeeGlobal.ROOT_URL+'/api/signin',
            type: 'post',
            dataType: 'json',
            data:data,
        })
        .done(function (list) {
            console.log(list);
        })
        .fail(function (e) {
            console.error(e);
            $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
        });
    }

    public register() {
        var self = this;
        var username = $('#register-form').find('#username').val();
        var password = $('#register-form').find('#password').val();
        var email = $('#register-form').find('#email').val();
        var firstname = $('#register-form').find('#firstname').val();
        var lastname = $('#register-form').find('#lastname').val();
        var title = $('#register-form').find('#jobtitle').val();
        var dept = $('#register-form').find('#department').val();
        
        if (!username) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_USERNAME"));
            return;
        } else if (!password) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
            return;
        } else if (!firstname) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_firstname"));
            return;
        } else if (!lastname) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_lastname"));
            return;
        } else if (!email) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_EMAIL"));
            return;
        } else if (!title) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_title"));
            return;
        } else if (!dept) {
            $('#register-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_department"));
            return;
        } else {
            $('#register-form').find('.msg_error').text("");
        }
        var data;
        data = "email=" + email;
        data += "&username=" + username;
        data += "&password=" + password;
        data += "&firstname=" + firstname;
        data += "&latname=" + lastname;
        data += "&title=" + title;
        data += "&department=" + dept;
        $.ajax({
            url: employee.EmployeeGlobal.ROOT_URL+'/api/signin?' + new Date().getTime(),
            type: 'post',
            dataType: 'json',
            data:data,
        })
        .done(function (list) {
            
        })
        .fail(function (e) {
            console.error(e);
            $('#login-form').find('.msg_error').text(employee.performance.collection.Messages.getText("ERROR_INPUT_PASSWORD"));
        });
    }
    
}