pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract minaToken is StandardToken {
  string public name = "minaToken";
  string public symbol = "MNTK";
  uint public decimals = 3;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);
  address public owner;

  function minaToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    owner = msg.sender;
  }
}
