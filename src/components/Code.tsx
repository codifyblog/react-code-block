import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ClipboardOutline, CheckmarkSharp } from "react-ionicons";


interface LayoutProps {
    code: string
}

const Code: React.FC<LayoutProps> = ({ code }) => {
    const [copy, setCopy] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopy(true);
        setTimeout(() => setCopy(false), 3000);
    };

    return (
        <div className="w-full max-w-2xl min-w[30rem] bg-[#2F2F2F] rounded-md overflow-hidden">
            <div className="flex justify-between px-4 text-white text-xs items-center">
                <p className="text-sm">tsx</p>
                {copy ? (
                    <button className="py-[6px] inline-flex items-center gap-1">
                        <CheckmarkSharp color="#fff" width="14px" />
                            Copied!
                    </button>
                ) : (
                    <button className="py-[6px] inline-flex items-center gap-1" 
                        onClick={copyToClipboard}>
                        <ClipboardOutline color="#fff" width="14px" />
                            Copy code
                    </button>
                )
                }
            </div>
            <SyntaxHighlighter 
                language="jsx" 
                style={vs2015}
                wrapLongLines={true}
                customStyle={{
                    padding: "25px"
                }}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default Code;
