import * as employee from "../../../employee";

export class Messages {
    static ERROR_TITLE_JP: string = "警告";
    static ERROR_TITLE_EN: string = "Warning";

    static ERROR_INPUT_USERNAME_JP: string = "ユーザー名を入力してください";
    static ERROR_INPUT_USERNAME_EN: string = "Please enter username.";

    static ERROR_INPUT_PASSWORD_JP: string = "パスワードを入力してください";
    static ERROR_INPUT_PASSWORD_EN: string = "Please enter password.";

    static ERROR_INPUT_FIRSTNAME_JP: string = "名を入力してください";
    static ERROR_INPUT_FIRSTNAME_EN: string = "Please enter firstname.";

    static ERROR_INPUT_LASTNAME_JP: string = "姓を入力してください";
    static ERROR_INPUT_LASTNAME_EN: string = "Please enter lastname.";

    static ERROR_INPUT_EMAIL_JP: string = "メールアドレスを入力してください";
    static ERROR_INPUT_EMAIL_EN: string = "Please enter email.";

    static ERROR_INPUT_TITLE_JP: string = "タイトルを入力してください";
    static ERROR_INPUT_TITLE_EN: string = "Please enter title.";

    static ERROR_INPUT_DEPARTMENT_JP: string = "部門を入力してください";
    static ERROR_INPUT_DEPARTMENT_EN: string = "Please enter department.";

    static ERROR_INPUT_PASSWORD2_JP: string = "パスワードが違います。";
    static ERROR_INPUT_PASSWORD2_EN: string = "Please check your password.";
    /**
     * メッセージの取得
     * @param key:string
    */
    static getText(key: string) {
        let varname: string = (key + "_" + employee.performance.EmployeeGlobal.language).toUpperCase();
        return employee.performance.collection.Messages[varname];
    }
}
