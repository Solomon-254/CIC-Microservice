
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SubarrayService {
    findMaxSubarray(arr: number[]): { maxSum: number; subarray: number[] } { //takes an array of numbers
        if (arr.length === 0) {
            throw new BadRequestException('Array must contain at least one number');
        }

        //  Space Complexity: O(1) - only fixed number used 
        let maxSum = arr[0]; //defaults the largest so far
        let currentSum = arr[0]; //defaults the sum so far

        //index of the best subarray found so far
        let start = 0;
        let end = 0;

        //tracks the new strating index potentially
        let tempStart = 0;
        // Time Complexity: O(n) - array is looped only once
        for (let i = 1; i < arr.length; i++) { //loops from the initalized index
            if (arr[i] > currentSum + arr[i]) {
                currentSum = arr[i];      // new streak starts here
                tempStart = i;            // mark the possible new start
            } else {
                currentSum += arr[i];     // continue the current streak
            }
            if (currentSum > maxSum) {
                maxSum = currentSum;   // update the best total
                start = tempStart;     // remember where this new best streak started
                end = i;               // and where it ends
            }

        }

        return {
            maxSum,
            subarray: arr.slice(start, end + 1),
        };
    }



}
