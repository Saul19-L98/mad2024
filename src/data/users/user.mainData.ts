import { usersGroup1s } from "@/data/users/groups/users.group1s";
import { userGroupo3s } from "@/data/users/groups/users.group.3s";
import { userGroup4s } from "@/data/users/groups/users.group4s";
import { usersGroup5s } from "@/data/users/groups/users.group5s";
import { userGroup1ac } from "@/data/users/groups/users.group1ac";
import { userGroup2ac } from "@/data/users/groups/users.group2ac";
import { UserProfileData } from "@/types/usersdata.type";
const userMainData = [
  ...usersGroup1s,
  ...userGroupo3s,
  ...userGroup4s,
  ...usersGroup5s,
  ...userGroup1ac,
  ...userGroup2ac,
];
// Function to shuffle an array
function shuffleArray(array: UserProfileData[]): UserProfileData[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomSubset(
  array: UserProfileData[],
  n: number
): UserProfileData[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, n);
}

// Shuffle the userMainData array
const shuffledUserMainData = shuffleArray(userMainData);
//Get a random subset of 9 users
const randomNineUsers = getRandomSubset(userMainData, 9);

// Export the shuffled array
export { shuffledUserMainData as userMainData, randomNineUsers };
