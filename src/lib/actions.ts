import axios from 'axios'

export async function getContractEvents() {
    "use server"
    const contractAddress = '0xF9e631014Ce1759d9B76Ce074D496c3da633BA12';
    const apiKey = 'DDB9PFHRN8XHCCCDNNAXCP8K7N6MFZZCHJ';
    try {
        const url = `https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=${contractAddress}&apikey=${apiKey}`;
        const response = await axios.get(url);
        const events = response.data.result.slice(0, 10);
        console.log('Contract events:', events);
        return events;
    } catch (error) {
        console.error('Error fetching contract events:', error);
        throw error;
    }
}