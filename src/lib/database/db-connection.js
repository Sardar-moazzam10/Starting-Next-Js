const username=process.env.myusername
const password=process.env.mypassword
if(!username||!password){
    throw new Error("Missing Something usernameor password")
}
export const connectionString=(`mongodb+srv://${username}:${password}@cluster0.u8vul.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0`)