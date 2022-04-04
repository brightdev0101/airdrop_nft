const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "A Bored Ape On Testnet",
      attributes: [
        {
          "trait_type": "Extermination",
          "value": "Extremely High"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.pinata.cloud/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6/",
      description: "Tongue is out! Leopard is on!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
