import * as employee from "../../employee";
import * as $ from "jquery";
export class EmployeeGlobal {

    //アプリ情報
    static APP_NAME: string = "Employee Performnace";
    static APP_VERSION: string = "";
    static APP_CUSTOM: string = "";
    static APP_REVISION: string;
    /**
     * 言語
     */
    static _language: string = "jp";
    static get language(): string {
        return this._language;
    }
    static set language(value: string) {
        this._language = value;
    }

    static loginManager: employee.performance.manager.LoginManager;

    
    static ROOT_URL = "http://localhost:3000";
}
