pragma solidity ^0.4.17;

//contract that creates a new instance of the Campaign contract
//the user will send a transaction to this contract while creating a new campaign
contract CampaignFactory {
    
    address[] public deployedCampaigns;         //store a list of addresses of the deployed contracts
    
    
    //code to create a new Campaign
    function createCampaign(uint minimum) public {
        //the below line instantiates the Campaign Contract(creates a new campaign) and 
        //returns the address where it was deployed
        //here msg.sender is the address of the creator of the campaign
        
        address newCampaign = new Campaign(minimum, msg.sender);    
                
        deployedCampaigns.push(newCampaign);    //store the address of the newly created campaign
    }
    
    
    //code to get the list of addresses of deployed contracts
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}


//contract to create a new campaign
contract Campaign {
    
    struct Request {
        string description;                         //store description of request to be made
        uint value;                                 //store value to be spent
        address recipient;                          //store the address of the recipient of the value
        bool complete;                              //store status whether the request is granted or not
        uint approvalCount;                         //store number of approvals by the contributers
        mapping(address => bool) approvals;         //store the address of the contributers that approve the request
    }
    
    Request[] public requests;                      //store each request made by the manager
    address public manager;                         //store the address of the creator of the campaign
    uint public minimumContribution;                //store minimum value required to contribute to the campaign
    mapping(address => bool) public contributers;   //store the address of contributers
    uint public contributersCount;                  //store number of contributers
     
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
     
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    
    //code for contributer to contribute to campaign
    function contribute() public payable {
        require(msg.value >= minimumContribution);
         
        contributers[msg.sender] = true;
        contributersCount++;
    }
    
    
    //code for manager to create a request 
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({         //creates a new separate copy of Request.
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
         
        //The below line is an alternative to the above instantiation of Request struct.
        /*    Request(description, value, recipient, false, 0);    */
        //The above line of code takes values in the same order of declaration.
         
        requests.push(newRequest);
    }
    
    
    //code for contributer to approve the request set by the manager 
    function approveRequest(uint index) public {
        Request storage request = requests[index];      //references or pointer to original copy.
        
        //conditions for approveRequest to satisfy
        require(contributers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        //After above conditions satisfy
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    
    //code for manager to finalize the request set by him.
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];      //references or pointer to original copy.
        
        //conditions for finalizeRequest to satisfy
        require(!request.complete);
        require(request.approvalCount > (contributersCount/2));
        
        //After above conditions satisfy
        request.recipient.transfer(request.value); //transfer the agreed amount to the recipient address
        request.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            contributersCount,
            manager
        );
    }

    function getRequestCount() public view returns(uint) {
        return requests.length;
    }
}

