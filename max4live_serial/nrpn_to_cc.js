// MIDI CC constants
const CC_DATA_MSB = 6;
const CC_DATA_LSB = 38;
const CC_NRPN_LSB = 98;
const CC_NRPN_MSB = 99;

// inlets and outlets
inlets = 1;
outlets = 1;

// global variables and arrays
var nrpn_index;            // Save last known rpn index
var data;
var output;                // Up to 8 Bytes to send

// Maxobj variables for scripting
var nrpn_index_lsb;
var nrpn_index_msb;
var data_lsb;
var data_msb;

// methods start here

// list - expects an RPN 14 bit Index + 14 bit Value
function list(val)
{
    if(arguments.length==2)
    {
        nrpn_index = arguments[0];
        data = arguments[1];

        nrpn_index_lsb = nrpn_index & 0x007F;
        nrpn_index_msb = (nrpn_index ) >> 7 ;
        data_lsb = data & 0x007F;
        data_msb = (data & 0x3F8) >> 7;
       
        outlet(0, CC_NRPN_MSB, nrpn_index_msb);
        outlet(0, CC_NRPN_LSB, nrpn_index_lsb);
        outlet(0, CC_DATA_MSB, data_lsb);
       // outlet(0, CC_DATA_LSB, data_lsb);
    }
}