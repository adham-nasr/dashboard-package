import {loadEnvFile} from "node:process"
class Logger{
    static apiKey;
    static appName;
    static baseUrl;
    static init(apiKey,appName){
        try{
            loadEnvFile('.env')
        }
        catch(e){
            throw new Error(e);
        }
        Logger.baseUrl = process.env.baseUrl; 
        Logger.apiKey = apiKey
        Logger.appName = appName
    }
    static async log(data){
        try{
            const response = await fetch(`${Logger.baseUrl}/api/applications/${Logger.appName}/logs`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${Logger.apiKey}`,
                    "content-type":'application/json'

                },
                // Automatically converted to "username=example&password=password"
                body: JSON.stringify(data)
        })
            return response
        }catch(e){
            return e;
        }
    }
}

export default Logger