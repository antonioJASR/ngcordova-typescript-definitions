/// <reference path="../angularjs/angular.d.ts" />

declare module ngcordova {

    export interface IInAppBrowserDetails {
        code?: string;
        file?: string;
    }

    
    export interface IInAppBrowser {
        init(config: string): ng.IScope;
        init(config: {[key: string]: any}): ng.IScope;

        open(url:string, target: string): ng.IPromise<any>;
        close(): void;
        executeScript(details: ngcordova.IInAppBrowserDetails): ng.IPromise<any>;
        insertCSS(details: ngcordova.IInAppBrowserDetails): ng.IPromise<any>;
    }

    export interface IFacebookDialogOptions {
        method: string;
        link: string;
        caption: string;
    }

    export interface IFacebookService {
        login(permissions: Array<string>): ng.IPromise<any>;
        showDialog(options: ngcordova.IFacebookDialogOptions): ng.IPromise<any>;
        api(path: string, permissions: Array<String>): ng.IPromise<any>;
        getLoginStatus(): ng.IPromise<any>;
        getAccessToken(): ng.IPromise<any>;
        logout(): ng.IPromise<any>;

        browserInit(id: string, version: string): void;
    }

    export interface ICordovaToastService {
        show(message: string, duration: string, position: string): ng.IPromise<any>;
        showLongBottom(message: string): ng.IPromise<any>;
    }

    export interface ISocialSharingService {
        share(message: string, subject: string, file: string, link: string)
            : ng.IPromise<any>;

        shareViaTwitter(message: string, image: string, link: string)
            : ng.IPromise<any>;

        shareViaWhatsApp(message: string, image: string, link: string)
            : ng.IPromise<any>;
            
        shareViaFacebook(message: string, image: string, link: string)
            : ng.IPromise<any>;

        shareViaSMS(message: string, number: number): ng.IPromise<any>;

        shareViaEmail(message: string, subject: string, toArr: Array<string>, 
            bccArr: Array<string>, file: string): ng.IPromise<any>;

        canShareVia(socialType: string, message: string, image: string, 
            link: string): ng.IPromise<any>;
    }

    export interface IOauthService {
        dropbox(appKey: string) : ng.IPromise<any>;
        digitalOcean(clientId: string, clientSecret: string) : ng.IPromise<any>;
        github(clientId: string, clientSecret: string, appScope: Array<string>) : ng.IPromise<any>;
        facebook(clientId: string, appScope: Array<string>) : ng.IPromise<any>;
        linkedin(clientId: string, clientSecret: string, appScope:
            Array<string>, state: string) : ng.IPromise<any>;
        instagram(clientId: string, appScope: Array<string>) : ng.IPromise<any>;
        box(clientId: string, clientSecret: string, appState: string): ng.IPromise<any>; 
        reddit(clientId: string, clientSecret: string, appScope: Array<string>) : ng.IPromise<any>;
        twitter(clientId: string, clientSecret: string) : ng.IPromise<any>;
        meetup(clientId: string) : ng.IPromise<any>;
        foursquare(clientId: string) : ng.IPromise<any>;
    }
    
     export interface ICordovaSqlite {

        openDB(dbname:string,background?:number):any;
        execute(db:any,query:string,binding:Array<any>):ng.IPromise<any>;
        insertCollection(db:any,query:string,binding:Array<any>):ng.IPromise<any>;
        nestedExecute(db:any,query1:string,query2:string,binding1:Array<any>,binding2:Array<any>):ng.IPromise<any>;
        deleteDB(dbname:string,background?:number):ng.IPromise<any>;

    }
}      
