const web3 = new Web3(ethereum)
var narpyAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "iDtoArtes",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "linkImage",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "amountMinted",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_linkImage",
                "type": "string"
            }
        ],
        "name": "createTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_input",
                "type": "string"
            }
        ],
        "name": "createTokensOnChain",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getImageLink",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]
var narpyAddress = "0xD64b509B5Bb48aF7421024e45894562216e2c2c7";
let narpyContract = new web3.eth.Contract(narpyAbi, narpyAddress);
var connectWalletBtn = document.getElementById("connectWalletBtn");
var addressSpan = document.getElementById("contractAddressSpan");
addressSpan.innerHTML = narpyAddress;
var inputName = document.getElementById("nome");
var inputDescription = document.getElementById("descricao");
var inputImageLink = document.getElementById("linkImagemIpfs");
var registerBtn = document.getElementById("registerBtn");
var numeroDeArtes = document.getElementById("artesRegistradas");
let image = document.getElementById("image");
var botaoVisualizar = document.getElementById("botaoVisualizar");
var tokenIdInput = document.getElementById("tokenIdInput")
var obraNome = document.getElementById("obraNome");
var descricaoNome = document.getElementById("descricaoNome");
var proprietarioNome = document.getElementById("proprietarioNome");
var nomeOnChain = document.getElementById("nomeOnChain");
var descricaoOnChain = document.getElementById("descricaoOnChain");
var inputOnChain = document.getElementById("inputOnChain");
var registerBtnChain = document.getElementById("registerBtnChain");
var copyToClipBoardOwnerBtn = document.getElementById("copyToClipBoardOwnerBtn");
var copyContractAddressBtn = document.getElementById("copyContractAddressBtn");
var fileInput = document.getElementById("inputSVG")
function copyToClipboard(elementId) {
    let conteudo = document.getElementById(elementId).innerHTML
    let temp = document.createElement("input")
    temp.value = conteudo;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy")
    document.body.removeChild(temp)
}
copyToClipBoardOwnerBtn.addEventListener("click", () => {

    copyToClipboard("proprietarioNome")
})
copyContractAddressBtn.addEventListener("click", () => {
    copyToClipboard("contractAddressSpan")
})
image.addEventListener("error", (event) => {
    event.target.src = "https://tokenaim.com.br/favicon.ico";
    event.onerror = null;
})
async function getArtNumber() {
    var number = await narpyContract.methods.amountMinted().call();
    numeroDeArtes.innerHTML = number;
}
getArtNumber();
async function connectWallet() {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            return accounts[0];
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!")
    }
}
connectWalletBtn.addEventListener("click", () => {
    connectWallet().then((call) => {
        if (typeof (call) != "undefined") {
            alert(call)
        }
        else {
            alert("Please,Open your metamask browser extension!")
        }
    }).catch((error) => { })
})

async function createTokensOnChain(_name, _description, _inputOnchain) {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let account = await accounts[0].toString().toLowerCase();
            let owner = await narpyContract.methods.owner().call();
            owner = owner.toString().toLowerCase();
            let value = 0;
            if (account != owner) {
                value = 8 * 10 ** 15;
            }
            let call = await narpyContract.methods.createTokensOnChain(_name, _description, _inputOnchain).send({ from: account, value: value });
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!")
    }
};

async function createTokenSVG(_name, _description, base64,) {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let account = await accounts[0].toString().toLowerCase();
            let owner = await narpyContract.methods.owner().call();
            owner = owner.toString().toLowerCase();
            let value = 0;
            if (account != owner) {
                value = 8 * 10 ** 15;
            }
            let call = await narpyContract.methods.createTokens(_name, _description, base64).send({ from: account, value: value });
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!")
    }
};

async function createToken(_name, _description, _linkImage,) {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let account = await accounts[0].toString().toLowerCase();
            let owner = await narpyContract.methods.owner().call();
            owner = owner.toString().toLowerCase();
            let value = 0;
            if (account != owner) {
                value = 8 * 10 ** 15;
            }
            let call = await narpyContract.methods.createTokens(_name, _description, _linkImage).send({ from: account, value: value });
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!")
    }
};


// registerBtn.addEventListener('click', async () => {
//   createToken(inputName.value.toString(), inputDescription.value.toString(), inputImageLink.value.toString()).then((response) => {
//   }).catch((err) => {
//     console.log(err);
//   });
// })

registerBtnChain.addEventListener("click", () => {

    let _name = nomeOnChain.value
    let _descricao = descricaoOnChain.value

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.addEventListener("loadend", function () {
            const base64 = reader.result;
            console.log(base64);
            createTokenSVG(_name, _descricao, base64).then((call) => {
                console.log(call)
            }).catch((error) => { })
        });
        reader.readAsDataURL(file);
    }
    else if (fileInput.files.length == 0 && inputImageLink.value != '') {
        let imageLink = inputImageLink.value;
        createToken(_name, _descricao, imageLink).then((call) => {
            console.log(call)
        }).catch((error) => { })
    }

    else {
        let _input = inputOnChain.value
        createTokensOnChain(_name, _descricao, _input).then((call) => {
            console.log(call)
        }).catch((error) => { })
    }
});


async function getImageLink(tokenId) {
    if (ethereum) {
        try {
            let call = narpyContract.methods.getImageLink(tokenId).call();
            return call
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!")
    }
}
async function getArtInfo(_tokenId) {
    if (ethereum) {
        try {
            let call = await narpyContract.methods.iDtoArtes(_tokenId).call()
            return call
        } catch (error) {

        }
    } else {
        alert("Please Install Metamask")
    }
}
async function ownerOf(_tokenId) {
    if (ethereum) {
        try {
            let call = await narpyContract.methods.ownerOf(_tokenId).call()
            return call
        } catch (error) {
            console.log(error)
        }

    } else {
        alert("Please Install Metamask")
    }
}
async function getArtes() {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let account = await accounts[0].toString().toLowerCase();
            let totalArtes = await narpyContract.methods.amountMinted().call();
            let artesDoDono = [];
            for (let i = 0; i < totalArtes; i++) {
                let call = await narpyContract.methods.ownerOf(i).call()
                call = call.toString().toLowerCase();
                if (call == account) {
                    artesDoDono.push(i);
                }
            }

            return artesDoDono;
        } catch (error) {
            console.log(error)
        }

    } else {
        alert("Please Install Metamask")
    }
}

let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
let account = await accounts[0].toString().toLowerCase();
proprietarioNome.innerHTML = account;
const slideContainer = document.getElementById("image");
var artes = await getArtes();
var images = [];
for (let i = 0; i < artes.length; i++) {
    images[i] = await getImageLink(artes[i]);
}
let currentImageIndex = 0;
slideContainer.src = images[currentImageIndex];
getArtInfo(artes[currentImageIndex]).then((call) => {
    obraNome.innerHTML = `${call.name}`;
    descricaoNome.innerHTML = `${call.description}`;
})

function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideContainer.src = images[currentImageIndex];
    getArtInfo(artes[currentImageIndex]).then((call) => {
        obraNome.innerHTML = `${call.name}`;
        descricaoNome.innerHTML = `${call.description}`;
    })
}

setInterval(nextSlide, 4000);

