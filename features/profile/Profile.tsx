import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import ProfileDesktop from "./ProfileDesktop";
import ProfileMobile from "./ProfileMobile";


export default function Profile() {

    return (
        <>{
            useResponsiveComponent(
                <ProfileMobile />,
                <ProfileDesktop />
            )
        }</>);


}