import { useTonAddress, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import React from "react";

function UserDetails(props) {
    const useraddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    const wallet = useTonWallet()


    const [tonConnectUI, setOptions] = useTonConnectUI();

    const transaction = {
        messages: [
            {
                address: "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address
                amount: "20000000" //Toncoin in nanotons
            }
        ]

    }



    return (
        <div>

            <p className="text-center"> Raw Address :{rawAddress}</p>
            <p className="text-center"> User Address : {useraddress}</p>

            <div className="text-center">

                <p>{wallet?.aboutUrl}</p>
                <p>{wallet?.account.address}</p>
                <p>{wallet?.name}</p>


            </div>


            <div>
                <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
                    Send transaction
                </button>


            </div>

        </div>
    );
}

export default UserDetails;
