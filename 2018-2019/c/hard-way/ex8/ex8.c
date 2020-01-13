#include <stdio.h>

int main(int argc, char *argv[])
{
  int i = 0;

  if (argc == 1)
  {
    printf("You only have one argument");
    printf("%s ", argv[i]);
  }
  else if (argc > 1 && argc < 4)
  {
    printf("Here is your arguments");

    for (i = 0; i < argc; i++)
    {
      printf("%s ", argv[i]);
    }
  }
  else
  {
    printf("You have too many args");
  }

  return 0;
}