import Container from "@/components/container";
// import ThemeSwitch from "@components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights
        reserved.
      </div>
      <div className="mt-1 text-sm text-center text-gray-400 dark:text-gray-600">
        Made with{" "}
        {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR contact hello@web3templates.com for commercial license.  */}
        <a href="https://shahriar.netlify.app/" rel="noopener" target="_blank">
          Tailwind CSS
        </a>
      </div>
      <div className="flex items-center justify-between mt-2">
        {/* <ThemeSwitch /> */}
      </div>
    </Container>
  );
}
