import "./globals.css";
import Code from "@/components/Code";


const codeString = `import React from "react";
import { IonIcon } from "react-ionicons";
    
const App: React.FC = () => {
    return (
        <div>
            <IonIcon icon="home" />
            {/* Example of using an icon */}
        </div>
    );
};
    
export default App;`;

export default function App() {
    return (
        <main className="bg-[#212121] grid place-items-center h-screen">
            <Code code={codeString} />
        </main>
    );
}
