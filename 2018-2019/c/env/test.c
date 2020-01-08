#include <stdio.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
    long sz = sysconf(_SC_PAGESIZE);

    printf("%ld ", "PageSize[Bytes] :", sz);

    return 0;

}