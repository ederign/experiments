#include <stdio.h>

int main(int argc, char *argv[])
{

  int teste = 1337;
  int *t = &teste;
  int **t1 = &t;
  printf("%d \n", teste);
  
  printf("%d \n", *t);
  printf("%d \n", **t1);

  int tarray[] = {31337, 31338};
  int *tarray1 = tarray;
  printf("%d \n", *tarray1);
  printf("%d \n", *(tarray1+ 1));
  printf("tarray 0  lives at %p.\n", (void*)&tarray[0]); 
  printf("tarray 1  lives at %p.\n", (void*)&tarray[1]); 
  printf("tarray1  lives at %p.\n", (void*)&tarray); 

  int ages[] = {23, 43, 12, 89, 2};
  char *names[] = {
      "Alan", "Frank", "Mary", "John", "Lisa"};

  int count = (sizeof(ages)) / sizeof(int);
  // printf("%s \n", &ages);
  int i = 0;
  for (i = 0; i < count; i++)
  {
    printf("%s has %d years alive.\n", names[i], ages[i]);
  }
  printf("----\n");

  int *cur_age = ages;
  char **cur_name = names;

  for (i = 0; i < count; i++)
  {
    printf("%s is %d years old.\n", *(cur_name + i), *(cur_age + i));
  }

  printf("----\n");
  for (i = 0; i < count; i++)
  {
    printf("%s is %d years old.\n", cur_name[i], cur_age[i]);
  }

  printf("---\n");

  for (cur_name = names, cur_age = ages; (cur_age - ages) < count; cur_name++, cur_age++)
  {
    printf("%s lived %d years so far.\n", *cur_name, *cur_age);
  }

  return 0;
}