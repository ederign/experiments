#include <stdlib.h>
#include <stdio.h>

void double_in(int *in)
{
  *in *= 2;
}

int main()
{
  int x[1]; // declare a one-item array, for demonstration purposes
  *x = 10;
  double_in(x);
  printf("x now points to %i.\n", *x);
  int y = 20;
  int *z = &y;
  double_in(&y);
  double_in(z);
  printf("y now points to %i.\n", y);
}