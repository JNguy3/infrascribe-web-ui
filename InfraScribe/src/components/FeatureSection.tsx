import bot from "../assets/agents.png"
import editor from "../assets/web-programming.png"
import cloud from "../assets/cloud.png"
import lightning from "../assets/lightning.png"
import shield from "../assets/security.png"
import merge from "../assets/merge.png"
interface FeatureCard {
    title: string,
    description: string,
    icon: string,
    color: string
}

const IconCard = ({title, description, icon, color}: FeatureCard) =>{
    return(
        <div className="items-center justify-center border border-gray-300 rounded-xl px-3 py-3 bg-white">
            <div className={`${color} my-2 px-2 py-2 w-10 h-10 rounded-xl`}>
                <img src={icon} alt={title} className="w-10 h10"/>
            </div>
            <h3 className="font-semibold pt-2">{title}</h3>
            <p className="pt-1 text-slate-500">{description}</p>
        </div>
    )
}

export const FeatureSection = () =>{
    return(
        <>
        <div className="items-center bg-white p-10 rounded-xl mx-auto mt-24 max-w-[100rem]">
            <div className="flex flex-col items-center justify-center text-center pt-5">
                <h2 className="font-semibold text-3xl">Powerful Features</h2>
                <p className="text-lg text-slate-500 pt-3">Everything you need to build and manage cloud infrastructure</p>
            </div>
            <div className="">
                <div className="grid grid-cols-3 gap-4 mx-auto px-8 pt-[75px]">
                    <IconCard color="bg-blue-100" icon={bot} title = "AI-Powered Generation" description="Describe your app in plain English and get production-ready Terraform code instantly"></IconCard>                   
                    <IconCard color="bg-teal-100" icon={editor} title = "Built-in Editor" description="Edit, customize, and refine your Terraform files with our integrated code editor"/>
                    <IconCard color="bg-purple-100" icon={cloud} title = "Multi-Cloud Support" description="Generate infrastructure for AWS, Azure, GCP, and more cloud providers"/>
                    <IconCard color="bg-green-100" icon={lightning}title = "Lightning Fast" description="Generate complete infrastructure code in seconds, not hours or days"/>
                    <IconCard color="bg-orange-100" icon={shield} title = "Best Practices" description="AI follows industry best practices for security, scalability, and reliability"/>
                    <IconCard color="bg-pink-100" icon={merge} title = "Version Control Ready" description="Export your Terraform files and integrate with your existing Git workflow"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default FeatureSection