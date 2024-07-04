// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
contract Yotta{
   
    struct School{
    string nom_ecole;
    string adresse_physique;
    string telephone;
    string adresse_email;
    string type_ecole;
    address owner; 
    uint256 numero_d_enregistrement;
    }

    struct Student {
    
    string name;
    uint256 age;
    string diplome;
    uint256 schoolId;
}
// Mapping pour stocker les élèves en fonction de leur identifiant
  mapping(uint => School) public schools;
  mapping(uint => Student) public students;
    
uint public schoolCount;
uint public studentCount;

    function registerSchool(string memory _name, string memory _adresse_physique
                       ,string memory _telephone, string memory _adresse_email, string memory _type_ecole
                       ,address _owner, uint256 _numero_d_enregistrement) 
                       public {
        schoolCount++;
        schools[schoolCount] = School(_name, _adresse_physique,_telephone,_adresse_email,_type_ecole, _owner, _numero_d_enregistrement);
    }

    function registerStudent(string memory _name, uint256 _age, string memory _diplome, uint256 _schoolId) public {
    require(_schoolId > 0 && _schoolId <= schoolCount, "School does not exist");
    
    studentCount++;
    students[studentCount] = Student(_name, _age,_diplome, _schoolId);
}
function getSchool(uint256 _schoolId) public view returns (string memory,string memory,string memory, string memory,address, uint256) {
        School memory school = schools[_schoolId];
        return (school.nom_ecole,school.adresse_physique,school.telephone,school.adresse_email, school.owner,school.numero_d_enregistrement);
    }


}