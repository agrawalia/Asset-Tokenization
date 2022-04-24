// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KycContract {
    address _owner;
    mapping(address => bool) allowed;
    modifier onlyOwner{
        require(msg.sender == _owner, "You are not the owner");
        _;
    }
    constructor(){
        _owner = msg.sender;
    }
    function setKycCompleted(address _addr) public onlyOwner{
        allowed[_addr] = true;
    }
    function setKycRevoked(address _addr) public onlyOwner{
        allowed[_addr] = false;
    }
    function KycCompleted(address _addr) public view returns(bool) {
        return allowed[_addr];        
    }
}