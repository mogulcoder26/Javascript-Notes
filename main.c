#include <stdio.h>
int main()
{
// sorting of array in descendin order.
    int arr[5] = {12, 45,1000, 67, 1};
    int store;

    for (int j = 0; j <= 3; j++)
    {
        for (int i = 0; i <= 4; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                store = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = store;
            }
        }
    }
    for (int i = 0; i <= 4; i++)
    {
        printf("%d\t", arr[i]);
    }

    return 0;
}