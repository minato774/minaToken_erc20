pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "./minaToken.sol";

contract minaMintable is MintableToken, minaToken {
    address public owner;
    function minaMintable() public {

        owner = msg.sender;
    }
}
