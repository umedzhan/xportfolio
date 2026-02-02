import { Header } from "./header";
import { MobileHeader } from "./MobileHeader";
import { Footer } from "./footer";
import { Media } from "./media";

export const Layout = ({ children }) => {
    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden md:block text-[#fff] bg-[#21201c]">
                <div className="mx-[171px]">
                    <Media />
                    <Header />
                    <main>{children}</main>
                    <div className="h-[145px]" />
                    <Footer />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden text-[#fff] bg-[#21201c] max-h-full">
                <div className="px-4">
                    <MobileHeader />
                    <main>{children}</main>
                    <div className="h-[145px]" />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
