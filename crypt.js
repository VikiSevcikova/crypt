const process = require('process');
const os = require('os');
const crypto = require('crypto');

class Crypt
	{
	// When all node applications start, the paramater list
	// will always have an ExecutablePath, but may, or maynot have Command Line Arguments
	constructor( node = undefined, module = undefined, suppliedParams = undefined)
		{
			console.log('Supplied Params:');
			console.log(suppliedParams);
            let dataToHash, hashedData, hash;
			for(let i = 0; i < suppliedParams.length; i++){
			    console.log('--------------------------------');
				switch(suppliedParams[i]){
					case '--md5': 
                        dataToHash = suppliedParams[++i];
						console.log(`"${dataToHash}" hashed with md5:`);
                        hash = crypto.createHash('md5');
                        hashedData = hash.update(dataToHash, 'utf-8');
                        console.log(hashedData.digest('hex'));
						break;
                    case '--sha1': 
                        dataToHash = suppliedParams[++i];
						console.log(`"${dataToHash}" hashed with sha1:`);
                        hash = crypto.createHash('sha1');
                        hashedData = hash.update(dataToHash, 'utf-8');
                        console.log(hashedData.digest('hex'));
                        break;
                    case '--sha224': 
                        dataToHash = suppliedParams[++i];
						console.log(`"${dataToHash}" hashed with sha224:`);
                        hash = crypto.createHash('sha224');
                        hashedData = hash.update(dataToHash, 'utf-8');
                        console.log(hashedData.digest('hex'));
                        break;
                    case '--sha256': 
                        dataToHash = suppliedParams[++i];
						console.log(`"${dataToHash}" hashed with sha256:`);
                        hash = crypto.createHash('sha256');
                        hashedData = hash.update(dataToHash, 'utf-8');
                        console.log(hashedData.digest('hex'));
                        break;
                    case '--sha384': 
                        dataToHash = suppliedParams[++i];
						console.log(`"${dataToHash}" hashed with sha384:`);
                        hash = crypto.createHash('sha384');
                        hashedData = hash.update(dataToHash, 'utf-8');
                        console.log(hashedData.digest('hex'));
                        break;
                    case '--whirpool': 
                        dataToHash = suppliedParams[++i];
						console.log(`"${dataToHash}" hashed with whirpool:`);
                        hash = crypto.createHash('whirpool');
                        hashedData = hash.update(dataToHash, 'utf-8');
                        console.log(hashedData.digest('hex'));
                        break;
					default:
						console.log("Command not found");
				}
			}
		}
	}

let args = process.argv.slice(2, process.argv.length);

let cryptApp = new Crypt(process.argv0, process.argv[1], args);

